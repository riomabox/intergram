import { h, Component } from 'preact';

export default class ChatFrame extends Component {

    shouldComponentUpdate() {
        // do not re-render via diff:
        return false;
    }

    render({intergramId, host, iFrameSrc, isMobile, conf, userId},{}) {
        let dynamicConf = window.intergramOnOpen || {}; // these configuration are loaded when the chat frame is opened
        let encodedConf = encodeURIComponent(JSON.stringify({...conf, ...dynamicConf}));
        return (
            <iframe src={iFrameSrc + '?id=' + intergramId + '&host=' + host + '&conf=' + encodedConf + '&userId=' + userId }
                    frameborder='0'
                    style={{
                        flex: '1',
                        width: '100%',
                        height: '100%',
                    }}>
            </iframe>
        );
    }
}
