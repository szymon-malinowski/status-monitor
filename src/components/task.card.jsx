export default function TaskCard({ title, status, priority }) {
  return (
    <>
      <h2>{title}</h2>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
    </>
  );
}
