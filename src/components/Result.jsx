import Card from "./Card";
export default function Result({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-width-6xl mx-auto p-10">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
