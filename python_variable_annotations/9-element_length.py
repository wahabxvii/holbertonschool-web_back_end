#!/usr/bin/env python3
"""This module provides a function for measuring sequence elements"""

from typing import Iterable, List, Sequence, Tuple


def element_length(
        lst: Iterable[Sequence]
        ) -> List[Tuple[Sequence, int]]:
    """Return each sequence with its corresponding length"""
    return [(i, len(i)) for i in lst]
