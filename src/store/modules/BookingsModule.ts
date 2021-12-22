import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";

export interface Booking {
  id: string;
  bookedAt: string;
  date: string;
  time: string;
  groupSize: number;
  name: string;
  deals: Array<string>;
}

export interface Stats {
  fetchedAtUtc: string;
  kpis: {
    bookings: {
      madeThisDay: number;
      madeThisWeek: number;
      neededThisWeekForBreakEven: number;
      targetForThisWeek: number;
    };
    howBusyIsItFactor: {
      thisDay: number;
      thisWeek: number;
    };
  };
}

export interface BookingsInfo {
  errors: Array<string>;
  bookings: Array<Booking>;
  stats: Stats;
}

@Module
export default class BookingsModule extends VuexModule implements BookingsInfo {
  errors = [];
  bookings = [] as Array<Booking>;
  stats = {} as Stats;

  /**
   * Get list of bookings
   * @returns Array<Booking>
   */
  get getBookings(): Array<Booking> {
    return this.bookings;
  }

  /**
   * Get list of stats
   * @returns Stats
   */
  get getStats(): Stats {
    return this.stats;
  }

  @Mutation
  [Mutations.GET_BOOKING_STATS_MUTATION](stats) {
    this.stats = stats;
  }

  @Action
  [Actions.GET_BOOKING_STATS_ACTION]() {
    return new Promise<void>((resolve, reject) => {
      ApiService.get("api/v1", "bookings/stats")
        .then(({ data }) => {
          this.context.commit(Mutations.GET_BOOKING_STATS_MUTATION, data);
          resolve();
        })
        .catch((response) => {
          console.error(response);
          reject();
        });
    });
  }

  @Mutation
  [Mutations.GET_BOOKINGS_MUTATION](bookings) {
    this.bookings = bookings;
  }

  @Action
  [Actions.GET_BOOKINGS_ACTION]() {
    // ?limit=${limit}
    return new Promise<void>((resolve, reject) => {
      ApiService.get("api/v1", "bookings")
        .then(({ data }) => {
          this.context.commit(Mutations.GET_BOOKINGS_MUTATION, data);
          resolve();
        })
        .catch((response) => {
          console.error(response);
          reject();
        });
    });
  }
}
