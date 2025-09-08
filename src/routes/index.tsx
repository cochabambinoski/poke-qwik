import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const pokemonId = useSignal(1);

  return (
    <>
      <span class="text-2xl">Buscador simple</span>

      <span class="text-9xl">{pokemonId}</span>

      {/* TODO: crear imagen */}
      <div class="mt-4">
        <button class="btn-primary mr-2">Anterior</button>
        <button class="btn-primary">Siguiente</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Poke Qwik",
  meta: [
    {
      name: "description",
      content: "Poke Qwik",
    },
  ],
};
