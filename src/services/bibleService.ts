import axios from "axios";

export const getBibleVerse = async (): Promise<string> => {
  try {
    // Passo 1: Obter um versículo aleatório
    const randomVerseResponse = await axios.get("https://bible-api.com/data/web/random");

    // Extrair as informações do versículo aleatório
    const { book_id, chapter, verse } = randomVerseResponse.data.random_verse;

    // Passo 2: Buscar a versão Almeida do versículo usando os dados extraídos
    const translatedVerseResponse = await axios.get(
      `https://bible-api.com/${encodeURIComponent(book_id).toLowerCase()} ${chapter}:${verse}?translation=almeida`
    );

    // Retornar o texto do versículo traduzido
    return translatedVerseResponse.data.text;
  } catch (error) {
    console.error("Erro ao buscar versículo:", error);
    return "Não foi possível obter um versículo.";
  }
};
