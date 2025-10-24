import React from 'react';

const PrincipleCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 transition-all duration-300 border border-transparent hover:border-[#00A9CE]">
    <h3 className="text-xl font-bold text-[#00A9CE] mb-3">{title}</h3>
    <div className="text-gray-300 space-y-3 prose prose-invert prose-p:text-gray-300 prose-li:text-gray-300">{children}</div>
  </div>
);

const ACESCard: React.FC<{ letter: string; title: string; description: string; example: string }> = ({ letter, title, description, example }) => (
  <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 transition-all duration-300 border border-transparent hover:border-[#00A9CE]">
    <div className="flex items-center mb-3">
      <div className="w-10 h-10 bg-[#00A9CE] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
        {letter}
      </div>
      <h3 className="text-xl font-bold text-[#00A9CE]">{title}</h3>
    </div>
    <div className="text-gray-300 space-y-3">
      <p>{description}</p>
      <div className="bg-[#1C1F2A] p-4 rounded-lg">
        <p className="text-sm text-gray-400 mb-2"><strong>Example:</strong></p>
        <p className="text-sm font-mono text-gray-200">{example}</p>
      </div>
    </div>
  </div>
);

const PromptEngineeringPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Prompt Engineering</h1>
      <p className="text-gray-400 mb-8">Master the art of crafting effective prompts with proven principles and frameworks.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Pane: Core Principles */}
        <div>
          <h2 className="text-2xl font-bold text-[#00A9CE] mb-6">Core Principles</h2>
          <div className="space-y-6">
            <PrincipleCard title="1. Be Specific, Clear, and Concise">
              <p>
                Vague prompts lead to vague answers. Provide as much detail and context as necessary. State the desired format, length, style, and audience for the response. Avoid ambiguity.
              </p>
              <p>
                <strong>Example:</strong> Instead of "Explain AI", try "Explain the concept of machine learning to a 10th-grade student in three paragraphs, using an analogy related to learning a sport."
              </p>
            </PrincipleCard>

            <PrincipleCard title="2. Provide Context and Persona (Role-Playing)">
              <p>
                Instruct the model to adopt a specific persona or role. This helps frame the response and tunes its knowledge, tone, and perspective. Providing relevant context from your specific domain is key for grounding the model.
              </p>
              <p>
                <strong>Example:</strong> "You are a senior software architect specializing in cloud-native applications. Review the following Python code for potential scalability bottlenecks and suggest improvements."
              </p>
            </PrincipleCard>
            
            <PrincipleCard title="3. Use Delimiters and Structured Input">
              <p>
                Clearly separate different parts of your prompt, such as instructions, context, examples, and input data. Use delimiters like triple backticks (```), XML tags (`<context>...</context>`), or just clear headings. This helps the model parse the request accurately.
              </p>
              <p>
                <strong>Example:</strong> "Translate the following text from English to French. ```The quick brown fox jumps over the lazy dog.```"
              </p>
            </PrincipleCard>

            <PrincipleCard title="4. Guide Reasoning with Chain-of-Thought">
              <p>
                For complex problems, ask the model to "think step-by-step" or provide a sequence of instructions. This forces the model to break down the problem and show its work, often leading to more accurate and logical conclusions.
              </p>
              <p>
                <strong>Example:</strong> "A user reports an error '502 Bad Gateway'. First, explain what this error typically means. Second, list the three most common causes in a web application stack. Third, provide a step-by-step troubleshooting guide for a developer to diagnose the issue."
              </p>
            </PrincipleCard>
            
            <PrincipleCard title="5. Iterate and Refine with Examples (Few-Shot Prompting)">
              <p>
                Don't expect the perfect prompt on the first try. Start with a simple prompt, analyze the output, and refine it. If you need a specific output format, provide one or more examples (shots) of the desired input-output pair. This is one of the most effective ways to guide the model's behavior.
              </p>
              <p>
                <strong>Example:</strong> "Extract the key entities from the text. Desired format is JSON. \n\nText: 'Apple Inc., based in Cupertino, announced the new iPhone 15 on Tuesday.'\nJSON: {'{\"organization\": \"Apple Inc.\", \"location\": \"Cupertino\", \"product\": \"iPhone 15\", \"date\": \"Tuesday\"}'}\n\nText: '...' "
              </p>
            </PrincipleCard>
          </div>
        </div>

        {/* Right Pane: ACES Framework */}
        <div>
          <h2 className="text-2xl font-bold text-[#00A9CE] mb-6">ACES Framework</h2>
          <p className="text-gray-400 mb-6">A simple, memorable framework for structuring effective prompts.</p>
          
          <div className="space-y-6">
            <ACESCard 
              letter="A" 
              title="Aim" 
              description="What is the main goal you are trying to achieve? Be clear about the desired outcome."
              example="Create a technical documentation for our API endpoint"
            />
            
            <ACESCard 
              letter="C" 
              title="Context" 
              description="What background information does the AI need to know? Provide relevant domain knowledge and constraints."
              example="Our API uses REST principles, returns JSON, and handles authentication via JWT tokens"
            />
            
            <ACESCard 
              letter="E" 
              title="Expectations" 
              description="What defines a successful answer? Specify format, length, level of detail, and any specific requirements."
              example="Include code examples, error handling, and keep it under 500 words"
            />
            
            <ACESCard 
              letter="S" 
              title="Source" 
              description="What information sources or persona should it use? Define the role or reference materials."
              example="Act as a senior developer with 10+ years of experience in API design"
            />
          </div>

          {/* ACES Example */}
          <div className="mt-8 bg-[#2A2D3A]/50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-[#00A9CE] mb-4">Complete ACES Example</h3>
            <div className="bg-[#1C1F2A] p-4 rounded-lg">
              <p className="text-sm text-gray-300 mb-2"><strong>Aim:</strong> Create a technical documentation for our API endpoint</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Context:</strong> Our API uses REST principles, returns JSON, and handles authentication via JWT tokens</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Expectations:</strong> Include code examples, error handling, and keep it under 500 words</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Source:</strong> Act as a senior developer with 10+ years of experience in API design</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-[#2A2D3A]/50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-[#00A9CE] mb-4">Further Reading</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer" className="text-[#00A9CE] hover:underline">OpenAI Prompt Engineering Guide</a></li>
          <li><a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer" className="text-[#00A9CE] hover:underline">Prompting Guide by DAIR.AI</a></li>
          <li><a href="https://developers.google.com/machine-learning/resources/prompt-eng" target="_blank" rel="noopener noreferrer" className="text-[#00A9CE] hover:underline">Google's Introduction to Prompt Engineering</a></li>
        </ul>
      </div>
    </div>
  );
};

export default PromptEngineeringPage;