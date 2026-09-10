#!/usr/bin/env python3
"""
module with a class Server that find the page size
and it's indexes.
"""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def index_range(self, page, page_size):
        """calculates the range of a page.
        """

        start_index = (page - 1) * page_size
        end_index = page * page_size
        return (start_index, end_index)

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """gets postion of a page

        Args:
            page (int)
            page_size (int)

        Return:
            a list of the page content.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        page_list = []
        start_index, end_index = self.index_range(page, page_size)
        page_list = self.dataset()[start_index:end_index]

        return page_list

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """returns a dictionary with hypermedia pagination info.

        Args:
            page (int): the current page number.
            page_size (int): the size of each page.

        Returns:
            a dictionary containing page_size, page, data,
                  next_page, prev_page and total_pages.
        """
        data = self.get_page(page, page_size)
        total_rows = len(self.dataset())
        total_pages = math.ceil(total_rows / page_size)
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages,
        }
