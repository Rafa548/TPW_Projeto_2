# Generated by Django 5.0 on 2023-12-15 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drf', '0003_author_publisher_alter_news_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='role',
            field=models.CharField(blank=True, default='user', max_length=100),
        ),
    ]
