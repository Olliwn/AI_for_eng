import React from 'react';

const PrincipleCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 transition-all duration-300 border border-transparent hover:border-[#00A9CE]">
    <h3 className="text-xl font-bold text-[#00A9CE] mb-3">{title}</h3>
    <div className="text-gray-300 space-y-3 prose prose-invert prose-p:text-gray-300 prose-li:text-gray-300">{children}</div>
  </div>
);

const PromptEngineeringPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Prompt Engineering Principles</h1>
      <p className="text-gray-400 mb-8">Crafting effective prompts is crucial for unlocking the full potential of AI models. Here are five foundational principles.</p>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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

        <PrincipleCard title="4. Guide Reasoning with Chain-of-Thought or Step-by-Step Instructions">
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
            <strong>Example:</strong> "Extract the key entities from the text. Desired format is JSON. \n\nText: 'Apple Inc., based in Cupertino, announced the new iPhone 15 on Tuesday.'\nJSON: `{\"organization\": \"Apple Inc.\", \"location\": \"Cupertino\", \"product\": \"iPhone 15\", \"date\": \"Tuesday\"}`\n\nText: '...' "
          </p>
        </PrincipleCard>
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