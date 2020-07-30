====================
sphinxcontrib-nwdiag
====================

.. image:: https://travis-ci.org/blockdiag/sphinxcontrib-nwdiag.svg?branch=master
   :target: https://travis-ci.org/blockdiag/sphinxcontrib-nwdiag

.. image:: https://coveralls.io/repos/blockdiag/sphinxcontrib-nwdiag/badge.png?branch=master
   :target: https://coveralls.io/r/blockdiag/sphinxcontrib-nwdiag?branch=master

.. image:: https://codeclimate.com/github/blockdiag/sphinxcontrib-nwdiag/badges/gpa.svg
   :target: https://codeclimate.com/github/blockdiag/sphinxcontrib-nwdiag

A sphinx extension for embedding network related diagrams using blockdiag_.

For now, nwdiag supports these diagrams:

- logical network diagram
- rack structure diagram
- packet structure diagram

This extension enables you to insert network related diagrams into your document.
Following code is an example::

   .. nwdiag::

      nwdiag {
        network {
          web01; web02;
        }
        network {
          web01; web02; db01;
        }
      }

.. _nwdiag: http://bitbucket.org/blockdiag/nwdiag/


For more details, see `online documentation`_ at http://blockdiag.com/.

.. _online documentation: http://blockdiag.com/en/nwdiag/sphinxcontrib.html


