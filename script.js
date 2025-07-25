// Navigation functionality
let mobileMenuOpen = false;

function scrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    if (mobileMenuOpen) {
        toggleMobileMenu();
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const spans = menuBtn.querySelectorAll('span');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        // Animate hamburger to X
        spans[0].style.transform = 'rotate(45deg) translateY(1px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-1px)';
    } else {
        mobileMenu.classList.add('hidden');
        // Animate X back to hamburger
        spans[0].style.transform = 'rotate(0) translateY(-0.125rem)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translateY(0.125rem)';
    }
}

// Chatbot functionality
let chatbotOpen = false;
let messages = [
    {
        role: 'assistant',
        content: 'Hello! I\'m here to help you learn more about WebKnights. Ask me anything about the program, schedule, or requirements!'
    }
];

const SYSTEM_PROMPT = `You are a helpful assistant for WebKnights, a FREE 4-week coding program for middle schoolers. Here are the key details:

PROGRAM OVERVIEW:
- Duration: 4 weeks (July 22 - August 16, 2024)
- Schedule: Monday-Friday, 11:00 AM - 12:00 PM
- Cost: 100% FREE
- Platform: Online via Discord
- Target: Middle school students (ages 11-14)
- Mentors: High school students with coding experience

CURRICULUM:
Week 1: HTML Fundamentals & Your First Webpage
Week 2: CSS Styling & Beautiful Designs  
Week 3: JavaScript Magic & Interactivity
Week 4: Final Projects & Portfolio Building

WHAT STUDENTS LEARN:
- HTML (structure and content)
- CSS (styling and visual design)
- JavaScript (interactive functionality)
- Web Design principles
- Git version control
- Responsive design
- Debugging techniques
- Website deployment
- Portfolio building

REQUIREMENTS:
- No prior coding experience needed
- Computer with internet access
- Discord account
- Enthusiasm to learn!

REGISTRATION:
- Google Form: https://forms.gle/MKj3QAncbSzyskg48
- Discord Server: https://discord.com/invite/hN8JJjFU
- Email: webknights.code@gmail.com

Keep responses friendly, encouraging, and focused on helping students understand the program. Use emojis occasionally but don't overdo it.`;

function toggleChatbot() {
    const chatbotCard = document.getElementById('chatbot-card');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    
    chatbotOpen = !chatbotOpen;
    
    if (chatbotOpen) {
        chatbotCard.classList.remove('hidden');
        chatbotToggle.innerHTML = '✕';
    } else {
        chatbotCard.classList.add('hidden');
        chatbotToggle.innerHTML = '💬';
    }
}

function addMessage(role, content) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(role === 'user' ? 'user-message' : 'assistant-message');
    messageDiv.classList.add('p-3', 'rounded-lg');
    
    const textP = document.createElement('p');
    textP.classList.add('text-sm');
    textP.classList.add(role === 'user' ? 'text-white' : 'text-gray-300');
    textP.textContent = content;
    
    messageDiv.appendChild(textP);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.classList.add('assistant-message', 'p-3', 'rounded-lg');
    
    const textP = document.createElement('p');
    textP.classList.add('text-sm', 'text-gray-300');
    textP.textContent = 'Typing...';
    
    typingDiv.appendChild(textP);
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

async function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const userInput = chatInput.value.trim();
    
    if (!userInput) return;
    
    // Add user message
    addMessage('user', userInput);
    messages.push({ role: 'user', content: userInput });
    
    // Clear input and disable button
    chatInput.value = '';
    sendButton.disabled = true;
    sendButton.textContent = 'Sending...';
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        // Simulate API call with a simple response system
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
        
        // Simple response logic based on keywords
        let response = generateResponse(userInput.toLowerCase());
        
        removeTypingIndicator();
        addMessage('assistant', response);
        messages.push({ role: 'assistant', content: response });
        
    } catch (error) {
        removeTypingIndicator();
        addMessage('assistant', 'Sorry, I encountered an error. Please try asking again or email us at webknights.code@gmail.com for help!');
    } finally {
        sendButton.disabled = false;
        sendButton.textContent = 'Send';
    }
}

function generateResponse(input) {
    // Simple keyword-based responses
    if (input.includes('schedule') || input.includes('time') || input.includes('when')) {
        return 'WebKnights runs Monday-Friday from 11:00 AM to 12:00 PM for 4 weeks (July 22 - August 16, 2024). Perfect timing for summer learning! ⏰';
    }
    
    if (input.includes('cost') || input.includes('price') || input.includes('free') || input.includes('money')) {
        return 'WebKnights is 100% FREE! No hidden costs, no materials to buy. We believe every student should have access to quality coding education. 💰';
    }
    
    if (input.includes('requirement') || input.includes('experience') || input.includes('beginner')) {
        return 'No prior coding experience required! Just bring a computer with internet access, create a Discord account, and come ready to learn. We welcome complete beginners! 🚀';
    }
    
    if (input.includes('register') || input.includes('signup') || input.includes('join')) {
        return 'Ready to join? Fill out our registration form: https://forms.gle/MKj3QAncbSzyskg48 and join our Discord server: https://discord.com/invite/hN8JJjFU. Can\'t wait to see you there! ⚔️';
    }
    
    if (input.includes('discord') || input.includes('platform') || input.includes('online')) {
        return 'All sessions happen on our Discord server! It\'s a great platform for learning, sharing code, and connecting with fellow knights. Join us at: https://discord.com/invite/hN8JJjFU 💬';
    }
    
    if (input.includes('learn') || input.includes('curriculum') || input.includes('teach')) {
        return 'You\'ll master HTML, CSS, JavaScript, and web design! Week 1: HTML basics, Week 2: CSS styling, Week 3: JavaScript interactivity, Week 4: Final projects. Plus Git, responsive design, and portfolio building! 🎯';
    }
    
    if (input.includes('mentor') || input.includes('teacher') || input.includes('instructor')) {
        return 'Our mentors are experienced high school students who are passionate about coding! They provide personalized guidance and create a supportive learning environment. Peer-to-peer learning is powerful! 👥';
    }
    
    if (input.includes('age') || input.includes('middle school') || input.includes('grade')) {
        return 'WebKnights is designed for middle school students (typically ages 11-14, grades 6-8). If you\'re close to this range and interested in coding, you\'re welcome to apply! 🎓';
    }
    
    if (input.includes('project') || input.includes('portfolio') || input.includes('build')) {
        return 'You\'ll build real websites and create a complete portfolio! Each week includes hands-on projects, and by the end, you\'ll have multiple websites to showcase your new skills. Perfect for college applications too! 🏗️';
    }
    
    if (input.includes('help') || input.includes('support') || input.includes('question')) {
        return 'I\'m here to help! Ask me about schedule, curriculum, requirements, registration, or anything else about WebKnights. For additional support, email webknights.code@gmail.com 📧';
    }
    
    // Default response
    return 'That\'s a great question! WebKnights is a FREE 4-week coding program for middle schoolers running July 22-August 16, 11AM-12PM daily on Discord. You\'ll learn HTML, CSS, JavaScript, and web design with high school mentors. Ready to start your coding journey? Ask me about registration, schedule, or curriculum! ⚔️';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
    
    // Chatbot toggle
    document.getElementById('chatbot-toggle').addEventListener('click', toggleChatbot);
    
    // Send message button
    document.getElementById('send-button').addEventListener('click', sendMessage);
    
    // Enter key for chat input
    document.getElementById('chat-input').addEventListener('keypress', handleKeyPress);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navigation');
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(13, 16, 23, 0.95)';
        } else {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }
    });
});