#!/usr/bin/env python3
"""This module provides a function that creates multiplier functions"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier"""

    def multiply(value: float) -> float:
        """Multiply value by the stored multiplier"""
        return value * multiplier

    return multiply
