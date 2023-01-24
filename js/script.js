const { createApp } = Vue

  createApp({
    data() {
      return {

        newActivity: '',
        activity: [

            {
                text: 'Trovare la concentrazione',
                done: false
            },
            {
                text: 'Terminare esercizi Boolean',
                done: true
            },
            {
                text: 'Studiare chitarra',
                done: false
            },
            {
                text: 'Palestra',
                done: true
            },
            {
                text: 'Bere tanta acqua',
                done: true
            }
        ]
        
      }
      
    },

    methods: {

        removeActivity(index) {
            this.activity.splice(index, 1)
        },

        addActivity() {
            const newElement = {
                text: this.newActivity,
                done: false
            }
            this.activity.push(newElement)
            this.newActivity = ''
        }

    }

  }).mount('#app')