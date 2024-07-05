from django.apps import AppConfig


class BilliprojappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'billiprojapp'

    def ready(self):
    	import billiprojapp.signals
