<template>
  <ListsWidget2
    :alerts="alerts.frontDeskAlerts"
    title="Front Desk Alerts"
  ></ListsWidget2>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import ListsWidget2 from "@/components/widgets/lists/Widget2.vue";

export default defineComponent({
  name: "FrontDeskAlerts",
  components: {
    ListsWidget2,
  },
  data() {
    return {
      alerts: {} as ComputedRef,
    };
  },
  mounted() {
    const store = useStore();
    store.dispatch(Actions.GET_ALERTS_ACTION).then(() => {
      this.alerts = computed(() => {
        return store.getters.getAlerts;
      });
    });
  },
});
</script>

<style scoped></style>
