from channels.generic.websocket import WebsocketConsumer

import json
import logging

logger = logging.getLogger(__name__)


class MeetingConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        logger.error(text_data)
        #text_data_json = json.loads(text_data)
        #message = text_data_json['message']
        #

        #self.send(text_data=json.dumps({
        #    'message': message
        #}))
