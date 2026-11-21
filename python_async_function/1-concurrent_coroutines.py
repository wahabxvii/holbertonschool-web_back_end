#!/usr/bin/env python3
"""This module executes multiple random-delay coroutines concurrently"""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Return random delays in ascending completion order"""
    delays = []
    coroutines = [wait_random(max_delay) for _ in range(n)]

    for coroutine in asyncio.as_completed(coroutines):
        delay = await coroutine
        delays.append(delay)

    return delays
