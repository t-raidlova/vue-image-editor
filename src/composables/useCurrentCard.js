import { ref } from "vue";
import { useRoute } from "vue-router";
import useCards from "./useCards";

export default function useCurrentCard() {
  const { allCards } = useCards();
  const route = useRoute();
  const selectedCard = ref({});

  //destructure array
  [selectedCard.value] = allCards.value.filter(
    //route params - always string!
    (card) => card.id === Number(route.params.id)
  );
  return { selectedCard };
}
