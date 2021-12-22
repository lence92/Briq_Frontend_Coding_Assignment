import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";

export interface Alert {
  bookingId: string;
  reason: string;
  timestamp: string;
}

export interface AlertInfo {
  alerts: { fetchedAtUtc: string; frontDeskAlerts: Array<Alert> };
}

@Module
export default class AlertsModule extends VuexModule implements AlertInfo {
  alerts = {} as { fetchedAtUtc: string; frontDeskAlerts: Array<Alert> };

  /**
   * Get list of alerts
   * @returns { fetchedAtUtc: string; frontDeskAlerts: Array<Alert> }
   */
  get getAlerts(): { fetchedAtUtc: string; frontDeskAlerts: Array<Alert> } {
    return this.alerts;
  }

  @Mutation
  [Mutations.GET_ALERTS_MUTATION](alerts) {
    this.alerts = alerts;
  }

  @Action
  [Actions.GET_ALERTS_ACTION]() {
    return new Promise<void>((resolve, reject) => {
      ApiService.get("api/v1", "bookings/front-desk-alert")
        .then(({ data }) => {
          console.log("alerts", data);
          this.context.commit(Mutations.GET_ALERTS_MUTATION, data);
          resolve();
        })
        .catch((response) => {
          console.error(response);
          reject();
        });
    });
  }

  @Action
  [Actions.SET_ALERT_ACTION](params) {
    return new Promise<void>((resolve, reject) => {
      ApiService.setHeader("content-type", "application/json");
      ApiService.post("api/v1/bookings/front-desk-alert", params)
        .then(({ data }) => {
          console.log("send alert", data);
          resolve();
        })
        .catch((response) => {
          console.error(response);
          reject();
        });
    });
  }
}
