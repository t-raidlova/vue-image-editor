import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import useCards from "./useCards";

export default function useCurrentCard() {
  const { allCards } = useCards();
  const route = useRoute();
  const selectedCard = ref({});
  const selectedPage = ref({});

  function getIndex() {
    return selectedCard.value.pages.findIndex(
      (page) => page.name === route.params.page
    );
  }

  function getSelectedPage() {
    selectedPage.value = selectedCard.value.pages[getIndex()];
  }

  onMounted(getSelectedPage);

  watch(
    () => route.params.page,
    () => {
      getSelectedPage();
    }
  );

  //destructure array
  [selectedCard.value] = allCards.value.filter(
    //route params - always string!
    (card) => card.id === Number(route.params.id)
  );

  return { selectedCard, selectedPage };
}
