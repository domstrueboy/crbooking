import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myId: 'myId',
    profiles: {
      myId: {
        name: 'My tiny school',
        slug: 'domstrueboy',
        flows: ['flow1', 'flow2'],
        events: ['event1', 'event2'],
        regularEvents: ['regEvent1', 'regEvent2'],
        teachers: ['teacher1', 'teacher2'],
        classes: ['class1', 'class2'],
      },
      vasya: {
        name: 'Vasiliy',
        slug: 'Васямба',
        flows: ['flow1', 'flow2'],
        events: ['event1', 'event2'],
        regularEvents: ['regEvent1', 'regEvent2'],
        teachers: ['teacher1', 'teacher2'],
        classes: ['class1', 'class2'],
      },
    },
    flows: {
      flow1: {
        name: '',
      },
    },
    events: {},
    regularEvents: {},
    teachers: {},
    classes: {},
  },
  getters: {
    getProfileId: state => (idOrSlug) => {
      if ({}.hasOwnProperty.call(state.profiles, idOrSlug)) return idOrSlug;
      const profile = Object.entries(state.profiles).find(el => el[1].slug === idOrSlug);
      if (profile) return profile[0];
      return null;
    },
    getProfilesList: state => Object.entries(state.profiles),
    getProfilesIdsList: state => state.profiles.keys(),
    getProfilesLinksList: state => Object.entries(state.profiles).map(
      el => ({
        link: el[1].slug ? el[1].slug : el[0],
        name: el[1].name,
      }),
    ),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
});
