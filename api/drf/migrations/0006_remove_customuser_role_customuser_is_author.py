# Generated by Django 5.0 on 2023-12-15 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drf', '0005_author_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='role',
        ),
        migrations.AddField(
            model_name='customuser',
            name='is_author',
            field=models.BooleanField(default=False),
        ),
    ]
