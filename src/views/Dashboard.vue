<template>
  <!--begin::Dashboard-->
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-md-6">
      <ChartsWidget3
        widget-classes="card-xl-stretch mb-xl-8"
        :this-day="thisDayMade"
        :this-week="thisWeekMade"
        type="made"
      ></ChartsWidget3>
    </div>
    <div class="col-md-6">
      <ChartsWidget3
        widget-classes="card-xl-stretch mb-xl-8"
        :this-day="thisDayBusy"
        :this-week="thisWeekBusy"
        type="busy"
      ></ChartsWidget3>
    </div>
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-12">
      <ListsWidget7
        widget-classes="card-xl-stretch mb-xl-8"
        :items="bookings"
        title="Latest Bookings"
        description="10 most recent bookings"
      ></ListsWidget7>
    </div>
  </div>
  <!--end::Row-->
  <!--end::Dashboard-->
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  onMounted,
} from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import ChartsWidget3 from "@/components/widgets/charts/Widget3.vue";
import ListsWidget7 from "@/components/widgets/lists/Widget7.vue";

export default defineComponent({
  name: "dashboard",
  components: {
    ChartsWidget3,
    ListsWidget7,
  },
  data() {
    return {
      stats: {} as ComputedRef,
      bookings: {} as ComputedRef,
      thisDayMade: [] as Array<{ name: string; data: Array<number> }>,
      thisWeekMade: [] as Array<{ name: string; data: Array<number> }>,
      thisDayBusy: [] as Array<{ name: string; data: Array<number> }>,
      thisWeekBusy: [] as Array<{ name: string; data: Array<number> }>,
    };
  },
  mounted() {
    const store = useStore();
    store.dispatch(Actions.GET_BOOKING_STATS_ACTION).then(() => {
      this.stats = computed(() => {
        return store.getters.getStats;
      });
      this.thisDayMade = [
        {
          name: "Bookings Made Today",
          data: [0, this.stats.kpis.bookings.madeThisDay],
        },
      ];
      this.thisWeekMade = [
        {
          name: "Bookings Made This Week",
          data: [0, this.stats.kpis.bookings.madeThisWeek],
        },
      ];

      this.thisDayBusy = [
        {
          name: "How busy will be today",
          data: [0, this.stats.kpis.howBusyIsItFactor.thisDay],
        },
      ];
      this.thisWeekBusy = [
        {
          name: "How busy will be this week",
          data: [0, this.stats.kpis.howBusyIsItFactor.thisWeek],
        },
      ];
    });

    store.dispatch(Actions.GET_BOOKINGS_ACTION).then(() => {
      this.bookings = computed(() => {
        return store.getters.getBookings
          .sort(
            (a, b) =>
              new Date(a.bookedAt).valueOf() - new Date(b.bookedAt).valueOf()
          )
          .reverse()
          .slice(0, 10);
      });
    });
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  },
});
</script>
