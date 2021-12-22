<template>
  <!--begin::List Widget 2-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title fw-bolder text-dark">{{ title }}</h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown2></Dropdown2>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, index) in alerts" :key="index">
        <!--begin::Item-->
        <div
          :class="{ 'mb-7': alerts.length - 1 !== index }"
          class="d-flex align-items-center"
        >

          <!--begin::Text-->
          <div class="flex-grow-1">
            <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">
              Reason: {{ item.reason }}
            </a>

            <span class="text-muted d-block fw-bold">
              Booking ID: {{ item.bookingId }}
            </span>

            <span class="text-muted d-block fw-bold">
              Reported At: {{ formatDate(item.timestamp) }}
            </span>
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 2-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import moment from "moment";
import {Alert} from "@/store/modules/AlertsModule";

export default defineComponent({
  name: "kt-widget-2",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
    alerts: Array,
    title: String,
  },
  computed: {
    formatDate() {
      return (value) => `${moment(String(value)).format("MM/DD/YYYY hh:mm")}`;
    },
  },
  setup() {
    const list = ref([
      {
        avatar: "media/avatars/150-1.jpg",
        name: "Emma Smith",
        description: "Project Manager",
      },
      {
        avatar: "media/avatars/150-4.jpg",
        name: "Sean Bean",
        description: "PHP, SQLite, Artisan CLI",
      },
      {
        avatar: "media/avatars/150-12.jpg",
        name: "Brian Cox",
        description: "PHP, SQLite, Artisan CLI",
      },
      {
        avatar: "media/avatars/150-8.jpg",
        name: "Francis Mitcham",
        description: "PHP, SQLite, Artisan CLI",
      },
      {
        avatar: "media/avatars/150-6.jpg",
        name: "Dan Wilson",
        description: "PHP, SQLite, Artisan CLI",
      },
    ]);

    return {
      list,
    };
  },
});
</script>
