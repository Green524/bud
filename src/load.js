import {Loading} from "element-ui";
import context from "@/main";

export default {
    openLoading () {
        Loading.service({fullscreen: true});
    },
    closeLoading () {
        let loadingInstance = Loading.service({fullscreen: true});
        context.$nextTick(() => {
            loadingInstance.close();
        });
    }
}
