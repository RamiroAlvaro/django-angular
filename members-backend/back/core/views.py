from rest_framework import viewsets

from back.core.models import Member
from back.core.serializers import MemberSerializer


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
