import { useState } from 'react';
import { Groq } from 'groq-sdk';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY || '',
  dangerouslyAllowBrowser: true
});

const SYSTEM_PROMPT = `You are an AI assistant for WebKnights, a FREE 4-week online program that teaches middle school students how to code websites.

Program Details:
- Audience: Middle school students (no experience required)
- Topics: HTML, CSS, JavaScript
- Mentors: Experienced high school coders
- Format: Online via Google Meet
- Duration: 4 weeks (July 22 – Aug 16), Mon–Fri, 11AM – 12PM
- Cost: FREE
- Registration: https://forms.gle/MKj3QAncbSzyskg48
- Discord: https://discord.com/invite/hN8JJjFU
- Contact Email: webknights.code@gmail.com

Be friendly, enthusiastic, and informative. Answer questions about the program, provide links when needed, and help parents understand the value of the program for their middle schoolers.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m here to help answer questions about WebKnights! Ask me about our FREE 4-week coding program for middle schoolers. 🚀'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
          { role: 'user', content: userMessage }
        ],
        model: 'llama3-8b-8192',
        temperature: 0.7,
        max_tokens: 500,
      });

      const response = chatCompletion.choices[0]?.message?.content || 'Sorry, I couldn\'t process that. Please try again!';
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I\'m having trouble connecting right now. Please contact us directly at webknights.code@gmail.com or join our Discord!'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-knight-primary hover:bg-knight-primary/90 shadow-lg shadow-knight-primary/25 border border-knight-accent/20"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      ) : (
        <Card className="w-80 h-96 bg-knight-dark/95 backdrop-blur-md border border-knight-accent/20 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-knight-accent/20">
            <CardTitle className="text-knight-light text-sm font-orbitron">WebKnights Assistant</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-knight-light hover:text-knight-accent"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg text-sm ${
                    message.role === 'user'
                      ? 'bg-knight-primary/20 text-knight-light ml-8 border border-knight-primary/30'
                      : 'bg-knight-darker text-knight-light mr-8 border border-knight-accent/20'
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="bg-knight-darker text-knight-light mr-8 p-3 rounded-lg border border-knight-accent/20">
                  <div className="animate-pulse">Thinking...</div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-knight-accent/20">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about WebKnights..."
                  className="bg-knight-darker border-knight-accent/20 text-knight-light placeholder:text-knight-muted"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-knight-primary hover:bg-knight-primary/90 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}