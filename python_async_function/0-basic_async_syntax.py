#!/usr/bin/env python3
"""This module provides an asynchronous random delay coroutine"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Wait for and return a random delay between zero and max_delay"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
