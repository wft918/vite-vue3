
import { defineStore } from 'pinia'
// import viewsRouter from '@/router/views'
import { flatMenuRoutes } from '@/router'

export const useIndexStore = defineStore('index', {
  state: () => {
    return {
      mainTabs: []
    }
  },
  getters: {},
  actions: {
    updateMainTabs(val) {
      if(typeof val === 'string') {
        const currentRouteObj = flatMenuRoutes.find(item => item.path == val)
        if(this.mainTabs.every(item => item.path !== val)) {
          this.mainTabs.push(currentRouteObj)
        }
      }else {
        this.mainTabs.splice(val, 1)
      }
    }
  }
})