"use client";

import { fetchGiffs } from "@/app/api-actions";
import { Title } from "@/app/components/atoms/title/Title";
import { GifGridItem } from "@/app/components/molecules/grid-item/GifGridItem";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

interface GifGrid {
  data: any;
}

export const GifGrid = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "itachi";

  const [gifs, setGifs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchGiffs(category);
        setGifs(data);
      } catch (error) {
        console.error("Error fetching gifs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <Title title={category} />

      {loading && <p>Loading</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gifs.map((img: any) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
