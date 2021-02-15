import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { v4 as uuidv4 } from "uuid";
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

  function updateCard(sectionIndex, data) {
    selectedCard.value.pages[getIndex()].sections[sectionIndex] = data;
  }

  //destructure array
  [selectedCard.value] = allCards.value.filter(
    //route params - always string!
    (card) => card.id === Number(route.params.id)
  );

  function addSection() {
    if (selectedPage.value.sections.lenght >= 4) return;

    const newSection = {
      id: uuidv4(),
      userInput: "Enter your text here...",
      height: 200,
      color: "#9f9f32",
      fontFamily: "Verdana",
      fontSize: "2.5rem",
      isItalic: true,
      isBold: false,
      justifyContent: "center",
      alignItems: "center",
    };

    selectedCard.value.pages[getIndex()].sections.push(newSection);
  }

  function removeSection(sectionIndex) {
    selectedCard.value.pages[getIndex()].sections.splice(sectionIndex, 1);
  }

  function updateSectionOrder(sectionIndex, direction) {
    const arr = selectedCard.value.pages[getIndex()].sections;

    // check if first or last section is selected
    if (
      selectedCard.value.pages[getIndex()].sections[
        sectionIndex + direction
      ] === undefined
    )
      return;

    [arr[sectionIndex], arr[sectionIndex + direction]] = [
      arr[sectionIndex + direction],
      arr[sectionIndex],
    ];
  }

  function updateImage(url) {
    selectedCard.value.pages[getIndex()].background = url;
    selectedCard.value.pages[getIndex()].backgroundPosition = "center";
  }

  function repositionImage(position) {
    selectedCard.value.pages[getIndex()].backgroundPosition = position;
  }

  function removeImage() {
    selectedCard.value.pages[getIndex()].background = "";
  }

  return {
    selectedCard,
    selectedPage,
    updateCard,
    addSection,
    removeSection,
    updateSectionOrder,
    updateImage,
    repositionImage,
    removeImage,
  };
}
