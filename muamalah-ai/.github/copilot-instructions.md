# Muamalah AI - Custom Instructions for GitHub Copilot

## Project Overview
Muamalah AI is a modern, clean web platform designed to educate Muslims about Islamic business laws (fiqh muamalah). This is a knowledge platform with structured learning built with Next.js, TypeScript, Tailwind CSS, and MongoDB.

## Core Values
- **Clarity**: Easy-to-understand explanations
- **Trustworthiness**: Evidence-based content from Qur'an, Hadith, and scholars
- **Simplicity**: Minimalist design with plenty of white space
- **Structure**: Organized, categorized knowledge

## Tech Stack
- Frontend: Next.js 14+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Backend: Next.js API routes
- Database: MongoDB (future scaling)

## Project Structure
```
muamalah-ai/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable React components
│   ├── lib/          # Utilities and helpers
│   ├── data/         # Sample content and data
│   └── styles/       # Global styles
├── public/           # Static assets
└── .github/          # GitHub configuration
```

## Key Features (MVP)
1. **Homepage**: Clean UI with search and featured topics
2. **Knowledge Library**: Categorized topics
3. **Topic Pages**: Structured format (Definition, Evidence, Scholarly Explanation, Real-world Application, Common Mistakes, Key Takeaways)
4. **Search Function**: Natural language search
5. **Responsive Design**: Mobile-first approach

## Design Principles
- Minimalist aesthetic (inspired by modern SaaS)
- Soft Islamic aesthetic without over-decoration
- Neutral color palette: greens, beige, white, soft dark mode
- Clean typography with strong hierarchy
- Abundant white space for readability

## Content Structure
All topics follow this format:
1. **Title** and short definition
2. **Definition** (in simple language)
3. **Evidence** (Qur'an/Hadith references)
4. **Scholarly Explanation** (summarized)
5. **Real-World Application** (modern context)
6. **Common Mistakes** (misconceptions)
7. **Key Takeaways** (bullet points)

## Development Notes
- Target audience: Young Muslims (18-35), students, entrepreneurs, beginners
- Tone: Calm, intelligent, respectful, balanced, approachable
- Content must distinguish between source texts and scholarly interpretation
- No aggressive or polarizing tone
- Platform should feel like a trusted guide

## Future Features
- AI Assistant that answers questions based on verified content only
- Structured response format with supporting evidence
