<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <!--begin::Header menu toggle-->
    <div
      class="d-flex align-items-center d-lg-none ms-2 me-n3"
      title="Show header menu"
    >
      <div
        class="btn btn-icon btn-active-light-primary"
        id="kt_header_menu_mobile_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/text/txt001.svg" />
        </span>
      </div>
    </div>
    <!--end::Header menu toggle-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "topbar",
  components: {},
});
</script>
