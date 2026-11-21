#!/usr/bin/env python3
"""This module collects values from an asynchronous generator"""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Return ten floats collected from an asynchronous generator"""
    return [number async for number in async_generator()]
