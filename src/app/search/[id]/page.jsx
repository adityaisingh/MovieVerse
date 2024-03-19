import Result from "@/components/Result";

export default async function page({ params }) {
  const seachTerm = params.id;
  console.log(params);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();

  const result = data.results;
  return (
    <div>
      {result &&
        result.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {result && <Result results={result} />}
    </div>
  );
}
