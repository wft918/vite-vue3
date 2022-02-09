
import { defineStore } from 'pinia'
import viewsRouter from '@/router/views'
console.log(viewsRouter,'viewsRouter')

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
        const currentRouteObj = JSON.parse(JSON.stringify(viewsRouter[0].children.filter(item => `/${item.path}` == val)[0]))
        currentRouteObj.path = `/${currentRouteObj.path}`
        if(this.mainTabs.every(item => item.path !== val)) {
          this.mainTabs.push(currentRouteObj)
        }
      }else {
        this.mainTabs.splice(val, 1)
      }
    }
  }
})