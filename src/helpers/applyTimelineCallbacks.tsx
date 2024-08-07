
interface TimelineCallback {
    position?:string;
    params?:any[];
    callbackType?:string;
    callback:() => void;
}
const applyTimelineCallbacks = (timeline:gsap.core.Timeline,timelineCallbacks:TimelineCallback[] = []) => {
    if (timelineCallbacks) {
        for (let i = 0; i < timelineCallbacks.length; i++) {
            const pos = timelineCallbacks[i].position,
                params = timelineCallbacks[i].params,
                cb = timelineCallbacks[i].callback,
                callbackType = timelineCallbacks[i].callbackType;

            if (callbackType) {
                // event callback
                timeline.eventCallback(callbackType as gsap.CallbackType,cb,params);
            } else if (pos) {
                timeline.call(cb,params,pos);
            } else {
                timeline.call(cb,params);
            }          
        }
    }
};
export default applyTimelineCallbacks;
export { TimelineCallback };