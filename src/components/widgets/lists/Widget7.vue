<template>
  <!--begin::List Widget 7-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bolder text-dark">{{ title }}</span>

        <span class="text-muted mt-1 fw-bold fs-7">{{ description }}</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-3">
      <template v-for="(item, index) in items" :key="index">
        <!--begin::Item-->
        <div
          :class="{ 'mb-7': items.length - 1 !== index }"
          class="d-flex align-items-sm-center"
        >
          <!--begin::Title-->
          <div class="d-flex flex-row-fluid flex-wrap align-items-center">
            <div class="flex-grow-1 me-2">
              <a
                href="#"
                class="text-gray-800 fw-bolder text-hover-primary fs-6"
                >{{ item.name }}</a
              >

              <span class="text-muted fw-bold d-block pt-1"
                >Group Size: {{ item.groupSize }}</span
              >
              <span class="text-muted fw-bold d-block pt-1"
                >Deals:
                <span v-for="(deal, indexDeal) in item.deals" :key="indexDeal"
                  >{{ deal
                  }}<span v-if="indexDeal !== item.deals.length - 1">, </span>
                </span></span
              >
              <span class="text-muted fw-bold d-block pt-1"
                >Booked At: {{ formatDate(item.bookedAt) }}</span
              >
              <span class="text-muted fw-bold d-block pt-1"
                >Date: {{ item.date }} {{ item.time }}</span
              >
            </div>
          </div>
          <!--end::Title-->
          <!--begin::Button-->
          <!--          data-bs-toggle="modal"
            data-bs-target="kt_modal_send_alert"-->
          <button
            type="button"
            class="btn btn-sm btn-primary float-end"
            @click="sendAlert(item.id)"
          >
            Send alert
          </button>
          <!--end::Button-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 7-->

  <SendAlertModal></SendAlertModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";
import SendAlertModal from "@/components/modals/general/SendAlertModal.vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "kt-widget-6",
  components: { SendAlertModal },
  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY HH:mm");
      }
    },
    sendAlert(bookingID) {
      this.$store
        .dispatch(Actions.SET_ALERT_ACTION, {
          bookingId: bookingID,
          reason: "optional textual reason for investigating this booking",
        })
        .then(() => {
          alert("Alert sent!");
        })
        .catch(() => {
          alert("Alert not sent!");
        });
    },
  },
  props: {
    widgetClasses: String,
    items: Array,
    title: String,
    description: String,
  },
});
</script>
