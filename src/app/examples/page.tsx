import CodeBlock from "@/components/Shared/CodeBlock/CodeBlock";

const ExamplePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-4">
      <h2>This is example page</h2>
      <CodeBlock
        language="ts"
        code={`const sum = (a: number, b: number): number => a + b;`}
      />
    </div>
  );
};

export default ExamplePage;
