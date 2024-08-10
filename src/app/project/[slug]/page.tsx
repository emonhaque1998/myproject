export default function SingleProject({
  params,
}: {
  params: { slug: string };
}) {
  return <h1>This is a single page {params.slug}</h1>;
}
