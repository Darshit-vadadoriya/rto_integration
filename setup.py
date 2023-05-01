from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in rto_integration/__init__.py
from rto_integration import __version__ as version

setup(
	name="rto_integration",
	version=version,
	description="Rto Integration",
	author="Darshit Patel",
	author_email="darshit@sanskartechnolab.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
