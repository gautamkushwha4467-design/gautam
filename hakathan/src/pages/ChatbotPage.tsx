import { useState, useEffect, useRef } from 'react'
import { Send, Plus } from 'lucide-react'
import { Card } from '../components/Common'
import { Input } from '../components/Form'
import { mockChatMessages } from '../utils/mockData'

export default function ChatbotPage() {
  const [messages, setMessages] = useState(mockChatMessages)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      sender: 'user' as const,
      message: input,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        'That\'s a great question! Let me help you with that.',
        'Based on your profile, here are some insights...',
        'I think you\'d be perfect for a career in that field!',
        'Let me suggest a learning path for you.',
        'You have a strong foundation in those skills.',
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant' as const,
        message: randomResponse,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-light py-12 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-screen md:h-[600px] flex flex-col animate-fade-in">
        {/* Header */}
        <Card className="rounded-b-none p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-poppins font-bold text-gray-900">CareerAI Assistant</h1>
              <p className="text-xs text-gray-600">Always here to help</p>
            </div>
            <button className="p-2 hover:bg-light rounded-lg">
              <Plus size={20} className="text-primary" />
            </button>
          </div>
        </Card>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === 'user'
                    ? 'gradient-primary text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-900 rounded-bl-none'
                }`}
              >
                <p className="break-words whitespace-pre-wrap">{msg.message}</p>
                <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-600'}`}>
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <Card className="rounded-t-none p-4 border-t border-gray-200">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about your career..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 gradient-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send size={20} />
            </button>
          </form>
        </Card>
      </div>
    </div>
  )
}
