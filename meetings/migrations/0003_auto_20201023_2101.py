# Generated by Django 3.1.2 on 2020-10-23 21:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('meetings', '0002_meeting_zoom_host_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='registration',
            name='breakout',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='meetings.breakout'),
        ),
        migrations.AddField(
            model_name='registration',
            name='zoom_data',
            field=models.TextField(default='{}'),
            preserve_default=False,
        ),
    ]
