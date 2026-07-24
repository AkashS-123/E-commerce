interface MapEmbedProps {
  query: string;
  label: string;
}

export default function MapEmbed({ query, label }: MapEmbedProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800">
      <iframe
        title={label}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        className="h-[380px] w-full grayscale-[15%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
