#!/usr/bin/env python3
"""
Module with index_range to calculate the
index of pages.
"""


def index_range(page, page_size):
    """calculates the range of a page."""

    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
