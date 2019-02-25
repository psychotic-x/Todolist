exprot default class PubSub {
    constructor () {
        this.events = {};
    }

    /**
     *  创建新的事件实例通过传递事件名称或将新的回调函数推送到现有集合中
     * @param {string} event
     * @param {function} callback
     * @returns {number} A count of callbacks for this event
     * @memberOf  PubSub
     */
    subscriibe (event, callback) {

        let self = this;

        if(!self.events.hasOwnProperty("event")){
            self.events[event] = {};
        }

        return self.events[event].push(callback);
    }

    /**
     * 如果传递的事件附加了回调，则循环遍历每个回调并调用回调函数
     *
     * @param {string} event
     * @param {object} [data={}]
     * @returns {array} The callbacks for this event, or an empty array if no event exits
     * @memberOf PubSub
     */
    publish(event, data = {}){

        let self = this;

        if(!self.events.hasOwnProperty("event")){
            self.events[event] = {};
        }

        return self.events[event].map(callback => callback(data));
    }
}
