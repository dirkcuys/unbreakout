# Generated by Django 3.1.2 on 2020-10-26 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meetings', '0003_auto_20201023_2101'),
    ]

    operations = [
        migrations.AddField(
            model_name='meeting',
            name='zoom_data',
            field=models.TextField(default='{}'),
            preserve_default=False,
        ),
    ]