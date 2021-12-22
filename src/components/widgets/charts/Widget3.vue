<template>
  <!--begin::Charts Widget 3-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">{{ title }}</span>
      </h3>

      <!--begin::Toolbar-->
      <div class="card-toolbar" data-kt-buttons="true">
        <a
          class="
            btn btn-sm btn-color-muted btn-active btn-active-primary
            px-4
            me-1
          "
          :class="{ active: isActiveToday }"
          id="kt_charts_widget_3_year_btn"
          @click="changeCategoriesToday"
          >Today</a
        >

        <a
          class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
          :class="{ active: isActiveWeek }"
          id="kt_charts_widget_3_week_btn"
          @click="changeCategoriesWeekly"
          >This Week</a
        >
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Chart-->
      <apexchart type="area" :options="options" :series="series"></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Charts Widget 3-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import moment from "moment";

export default defineComponent({
  name: "widget-1",
  props: {
    widgetClasses: String,
    thisDay: Array,
    thisWeek: Array,
    type: String,
  },
  data() {
    return {
      isActiveToday: true,
      isActiveWeek: false,
    };
  },
  watch: {
    thisDay(value) {
      this.series = value;
    },
  },
  methods: {
    changeCategoriesToday() {
      this.isActiveWeek = false;
      this.isActiveToday = true;
      this.series = this.thisDay as Array<{
        name: string;
        data: Array<number>;
      }>;

      const labelColor = getCSSVariableValue("--bs-gray-500");
      const borderColor = getCSSVariableValue("--bs-gray-200");
      const baseColor = getCSSVariableValue("--bs-info");
      const lightColor = getCSSVariableValue("--bs-light-info");

      let lastHour;
      if (this.type == "made") {
        this.title = "Bookings Made Today";
        lastHour = moment().format("HH:mm");
      } else if (this.type == "busy") {
        this.title = "How busy will be today";
        lastHour = "24:00";
      }

      this.options = {
        chart: {
          fontFamily: "inherit",
          type: "area",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {},
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "solid",
          opacity: 1,
        },
        stroke: {
          curve: "smooth",
          show: true,
          width: 3,
          colors: [baseColor],
        },
        xaxis: {
          categories: ["00:00", lastHour],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: labelColor,
              fontSize: "12px",
            },
          },
          crosshairs: {
            position: "front",
            stroke: {
              color: baseColor,
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: labelColor,
              fontSize: "12px",
            },
          },
        },
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          hover: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        tooltip: {
          style: {
            fontSize: "12px",
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands";
            },
          },
        },
        colors: [lightColor],
        grid: {
          borderColor: borderColor,
          strokeDashArray: 4,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        markers: {
          strokeColor: baseColor,
          strokeWidth: 3,
        },
      };
    },
    changeCategoriesWeekly() {
      this.isActiveWeek = true;
      this.isActiveToday = false;
      this.series = this.thisWeek as Array<{
        name: string;
        data: Array<number>;
      }>;

      const labelColor = getCSSVariableValue("--bs-gray-500");
      const borderColor = getCSSVariableValue("--bs-gray-200");
      const baseColor = getCSSVariableValue("--bs-info");
      const lightColor = getCSSVariableValue("--bs-light-info");

      let lastDay;
      if (this.type == "made") {
        this.title = "Bookings Made Today";
        lastDay = moment().format("dddd");
      } else if (this.type == "busy") {
        this.title = "How busy will be today";
        lastDay = "Sunday";
      }

      this.options = {
        chart: {
          fontFamily: "inherit",
          type: "area",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {},
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "solid",
          opacity: 1,
        },
        stroke: {
          curve: "smooth",
          show: true,
          width: 3,
          colors: [baseColor],
        },
        xaxis: {
          categories: ["Monday", lastDay],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: labelColor,
              fontSize: "12px",
            },
          },
          crosshairs: {
            position: "front",
            stroke: {
              color: baseColor,
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: labelColor,
              fontSize: "12px",
            },
          },
        },
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          hover: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        tooltip: {
          style: {
            fontSize: "12px",
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands";
            },
          },
        },
        colors: [lightColor],
        grid: {
          borderColor: borderColor,
          strokeDashArray: 4,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        markers: {
          strokeColor: baseColor,
          strokeWidth: 3,
        },
      };
    },
  },
  setup(props) {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");
    const baseColor = getCSSVariableValue("--bs-info");
    const lightColor = getCSSVariableValue("--bs-light-info");

    let title, lastHour;
    if (props.type == "made") {
      title = "Bookings Made Today";
      lastHour = moment().format("HH:mm");
    } else if (props.type == "busy") {
      title = "How busy will be today";
      lastHour = "24:00";
    }

    const options = {
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [baseColor],
      },
      xaxis: {
        categories: ["00:00", lastHour],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
        crosshairs: {
          position: "front",
          stroke: {
            color: baseColor,
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [lightColor],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        strokeColor: baseColor,
        strokeWidth: 3,
      },
    };

    const series = [
      {
        name: "Bookings",
        data: [30, 40],
      },
    ];

    return {
      options,
      series,
      title,
    };
  },
});
</script>
