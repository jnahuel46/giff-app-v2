export async function GET(request: Request) {
  const giffKey = process.env.GIFF_KEY as string;

  try {
    const urlParsed = new URL(request.url);

    const params = new URLSearchParams(urlParsed.search);

    const categoryParam = params.get("category");
    const url = `https://api.giphy.com/v1/gifs/search?q=${categoryParam}&limit=10&api_key=${giffKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img: any) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return new Response(JSON.stringify({ success: true, data: gifs }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Error fetching data" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
