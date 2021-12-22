<template>
  <!--begin::Modal - Send Alert-->
  <div
    class="modal fade"
    ref="sendAlertModalRef"
    id="kt_modal_send_alert"
    aria-modal="true"
    role="dialog"
  >
    <!--     tabindex="-1"
        aria-hidden="true" -->
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header pb-0 border-0 justify-content-end">
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          <!--begin::Heading-->
          <div class="text-center mb-13">
            <!--begin::Title-->
            <h1 class="mb-3">Send Alert</h1>
            <!--end::Title-->

            <!--begin::Description-->
            <div class="text-gray-400 fw-bold fs-5">
              If you need more info, please check out
              <a href="#" class="link-primary fw-bolder">FAQ Page</a>.
            </div>
            <!--end::Description-->
          </div>
          <!--end::Heading-->

          <!--begin::Google Contacts Invite-->
          <div class="btn btn-light-primary fw-bolder w-100 mb-8">
            <img
              alt="Logo"
              src="media/svg/brand-logos/google-icon.svg"
              class="h-20px me-3"
            />
            Invite Gmail Contacts
          </div>
          <!--end::Google Contacts Invite-->

          <!--begin::Separator-->
          <div class="separator d-flex flex-center mb-8">
            <span
              class="text-uppercase bg-white fs-7 fw-bold text-gray-400 px-3"
              >or</span
            >
          </div>
          <!--end::Separator-->

          <!--begin::Textarea-->
          <textarea
            class="form-control form-control-solid mb-8"
            rows="3"
            placeholder="Type or paste emails here"
          >
          </textarea>
          <!--end::Textarea-->

          <!--begin::Users-->
          <div class="mb-10">
            <!--begin::Heading-->
            <div class="fs-6 fw-bold mb-2">Your Invitations</div>
            <!--end::Heading-->

            <!--begin::List-->
            <div class="mh-300px scroll-y me-n7 pe-7">
              <template v-for="(user, index) in users" :key="index">
                <!--begin::User-->
                <div
                  class="
                    d-flex
                    flex-stack
                    py-4
                    border-bottom border-gray-300 border-bottom-dashed
                  "
                >
                  <!--begin::Details-->
                  <div class="d-flex align-items-center">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-35px symbol-circle">
                      <img v-if="user.avatar" alt="Pic" :src="user.avatar" />
                      <span
                        v-else
                        :class="`bg-light-${user.state} text-${user.state}`"
                        class="symbol-label fw-bold"
                      >
                        {{ user.name.charAt(0) }}
                      </span>
                    </div>
                    <!--end::Avatar-->

                    <!--begin::Details-->
                    <div class="ms-5">
                      <a
                        href="#"
                        class="
                          fs-5
                          fw-bolder
                          text-gray-900 text-hover-primary
                          mb-2
                        "
                        >{{ user.name }}</a
                      >

                      <div class="fw-bold text-gray-400">{{ user.email }}</div>
                    </div>
                    <!--end::Details-->
                  </div>
                  <!--end::Details-->

                  <!--begin::Access menu-->
                  <div class="ms-2 w-100px">
                    <select
                      v-model="user.access"
                      class="form-select form-select-solid form-select-sm"
                      data-control="select2"
                      data-hide-search="true"
                    >
                      <option value="1">Guest</option>
                      <option value="2">Owner</option>
                      <option value="3">Can Edit</option>
                    </select>
                  </div>
                  <!--end::Access menu-->
                </div>
                <!--end::User-->
              </template>
            </div>
            <!--end::List-->
          </div>
          <!--end::Users-->

          <!--begin::Notice-->
          <div class="d-flex flex-stack">
            <!--begin::Label-->
            <div class="me-5 fw-bold">
              <label class="fs-6">Adding Users by Team Members</label>
              <div class="fs-7 text-gray-400">
                If you need more info, please check budget planning
              </div>
            </div>
            <!--end::Label-->

            <!--begin::Switch-->
            <label
              class="form-check form-switch form-check-custom form-check-solid"
            >
              <input
                class="form-check-input"
                type="checkbox"
                value="1"
                checked="checked"
              />

              <span class="form-check-label fw-bold text-gray-400">
                Allowed
              </span>
            </label>
            <!--end::Switch-->
          </div>
          <!--end::Notice-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Send Alert-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "send-alert-modal",
  components: {},
  setup() {
    const sendAlertModalRef = ref<null | HTMLElement>(null);

    return {
      sendAlertModalRef,
    };
  },
});
</script>
