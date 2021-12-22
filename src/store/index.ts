import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";
import BookingsModule from "@/store/modules/BookingsModule";
import AlertsModule from "@/store/modules/AlertsModule";

config.rawError = true;

const store = createStore({
  modules: {
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
    BookingsModule,
    AlertsModule,
  },
});

export default store;
